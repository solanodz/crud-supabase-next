import { Label } from '@/components/ui/label'
import { signup } from './actions'
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function SignUpPage() {
    return (
        <form className='flex justify-center h-screen flex-col gap-3 max-w-lg mx-auto'>
            <h2 className='mb-16 font-bold text-4xl tracking-tight text-center'>Create Your Account</h2>
            <div className='flex flex-col'>
                <Label htmlFor="email">Email:</Label>
                <Input id="email" name="email" type="email" required />
            </div>
            <div className='flex flex-col'>
                <Label htmlFor="password">Password:</Label>
                <Input id="password" name="password" type="password" required />
            </div>
            <Button formAction={signup}>Sign up</Button>
            <span className='text-center text-muted-foreground text-sm tracking-tight'>Already have an account? <Link href="/login" className={buttonVariants({ variant: 'link' })}>Login here.</Link></span>
        </form>
    )
}