import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from '@satvikbatra/blogit/dist';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>()

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    console.log(body)
    const result = signupInput.safeParse(body)
    // console.log(result)

    if(!result.success) {
        c.status(411)
        return c.json({
            msg: "You sent the wrong input.",
        })
    }

    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
        })

        const token = await sign({id: user.id}, c.env.JWT_SECRET)
        c.status(200);
        return c.json({
            jwt: token
        })
    } catch(e) {
        console.log(e)
        c.status(500)
        return c.json({
            msg: "cannot creater user. try again later.",
        })
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const result = signinInput.safeParse(body);
    if(!result.success) {
        c.status(411)
        return c.json({
            msg: "You sent the wrong input.",
        })
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password
            }
        })

        if(!user) {
            c.status(404)
            return c.json({
                msg: "user not found.",
            })
        }

        const token = await sign({id: user.id}, c.env.JWT_SECRET);
        c.status(200)
            return c.json({
            jwt: token
        })
    } catch(e) {
        console.log(e)
        c.status(403)
        return c.json({
            msg: "Invalid credentials.",
        })
    }
})