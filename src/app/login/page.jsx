import { Label } from '@/components/ui/label'
import { login, signup } from './actions'
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <form className='flex justify-center h-screen flex-col gap-3 max-w-lg mx-auto'>
            <h2 className='mb-16 font-bold text-4xl tracking-tight text-center'>Login To Your Account</h2>
            <div className='flex flex-col'>
                <Label htmlFor="email">Email:</Label>
                <Input id="email" name="email" type="email" required />
            </div>
            <div className='flex flex-col'>
                <Label htmlFor="password">Password:</Label>
                <Input id="password" name="password" type="password" required />
            </div>
            <Button formAction={login}>Log in</Button>
            <span className='text-center text-muted-foreground text-sm tracking-tight'>Don&apos;t have an account? <Link href="/sign-up" className={buttonVariants({ variant: 'link' })}>Sign up here.</Link></span>
        </form>
    )
}