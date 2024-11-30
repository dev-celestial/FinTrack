'use client'

import Link from 'next/link';
import Image from 'next/image'
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
   
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href='/' className='mb-12 cursor-pointer items-center gap-2' >
            <Image 
                src='/icons/logo.svg'
                width={34}
                height={34}
                alt="Fintrack logo"
                className="size-[24px] max-xl:size-14"
            />
            <h1 className="sidebar-logo">Fintrack</h1>
        </Link>
        {sidebarLinks.map((item) => {
             const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
            return (
                <Link key={item.label} href={item.route} 
                className={cn('sidebar-link',{'bg-bank-gradient': isActive})}>
                    <div className="relative size-6">
                    <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
                
            />  
                    </div>
                </Link> 
            )
        })}
        </nav> 
    </section>
  )
}

export default Sidebar