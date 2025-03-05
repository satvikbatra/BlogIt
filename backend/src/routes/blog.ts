import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@satvikbatra/blogit/dist";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string;
    }
}>()

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const token = authHeader.split(" ")[1]
    
    try {
        const user = await verify(token, c.env.JWT_SECRET);

        if(user) {
            c.set("userId", String(user.id))
            await next()
        } else {
            c.status(403)
            return c.json({
                message: "You are not logged in.",
            })
        }
    } catch(e) {
        console.log("jwt auth failed, ", e)
        c.status(401)
        return c.json({
            msg: "Invalil or expired token.",
        })
    }
})


blogRouter.post('/new/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const result = createBlogInput.safeParse(body);
    if(!result.success) {
        c.status(411)
        return c.json({
            msg: "You sent the wrong input.",
        })
    }

    const userId = c.get("userId");

    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })
        
        c.status(200)
        return c.json({
            id: blog.id,
        })
    } catch(e) {
        console.log(e)
        c.status(500)
        return c.json({
            msg: "there is an error. please try again later.",
        })
    }
})

blogRouter.put('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const blogid = c.req.param("id");
    console.log(body)
    const result = updateBlogInput.safeParse(body)
    if(!result.success) {
        c.status(411)
        return c.json({
            msg: "You sent the wrong input.",
        })
    }

    try {
        const existingBlog = await prisma.post.findUnique({
            where: { id: blogid },
        });
        
        if (!existingBlog) {
            c.status(404);
            return c.json({
                msg: "Blog not found.",
            });
        }
        
        const blog = await prisma.post.update({
            where: {
                id: blogid
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        
        c.status(200)
        return c.json({
            id: blog.id,
        })
    } catch(e) {
        console.log(e)
        c.status(500)
        return c.json({
            msg: "there is an error. please try again later.",
        })
    }
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select: {
            title: true,
            id: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return c.json({
        blogs: blogs,
    })
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogid = c.req.param("id");

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: blogid
            },
            select: {
                title: true,
                id: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })

        if(!blog) {
            c.status(404)
            return c.json({
                msg: "Blog not found.",
            })
        }
        
        c.status(200)
        return c.json({
            blog: blog,
        })
    } catch(e) {
        console.log(e)
        c.status(500)
        return c.json({
            msg: "there is an error. please try again later.",
        })
    }
})
