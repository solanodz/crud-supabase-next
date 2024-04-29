

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { Button, buttonVariants } from '@/components/ui/button'
import { logOut } from './actions'
import Link from 'next/link'

export default async function PrivatePage() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <div className='m-4 flex flex-col gap-6'>
            <section className='flex  justify-between items-center'>
                <p className='px-4 p-2 tracking-tight rounded-lg bg-slate-100 border border-slate-300 text-xl font-semibold text-slate-800'><span className='text-muted-foreground'>Logged in as </span>{data.user.email}</p>
                <form action={logOut}>
                    <Button type="submit">Logout</Button>
                </form>
            </section>
            <section>
                <Link href="/calendar" className={buttonVariants({ variant: 'default' })}>Check your calendar</Link>
            </section>
        </div>
    )
}