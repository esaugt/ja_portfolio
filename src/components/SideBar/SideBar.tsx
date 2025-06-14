// components/Sidenav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
import clsx from 'clsx';

export interface Page {
  icon: React.ReactNode;
  name: string;
  path: string;
}

export interface RouteSection {
  layout: string;
  title?: string;
  pages: Page[];
}

interface SidenavProps {
  brandImg?: string;
  brandName?: string;
  routes: RouteSection[];
}

const sidenavTypes = {
  dark: 'bg-gradient-to-br from-gray-800 to-gray-900',
  white: 'bg-white shadow-sm',
  transparent: 'bg-transparent',
};

export default function SideBar({
  // brandImg = '/img/logo-ct.png',
  brandName = 'Material Tailwind React',
  routes,
}: SidenavProps) {
  const [openSidenav, setOpenSidenav] = useState(true);
  const [sidenavColor] = useState<'blue' | 'green' | 'red' | 'gray'>('blue');
  const [sidenavType] = useState<'dark' | 'white' | 'transparent'>('dark');

  const pathname = usePathname();

  return (
    <aside
      className={clsx(
        sidenavTypes[sidenavType],
        openSidenav ? 'translate-x-0' : '-translate-x-80',
        'fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100'
      )}
    >
      <div className="relative">
        <Link href="/" className="py-6 px-8 text-center block">
          <Typography
                      variant="h6"
                      color={sidenavType === 'dark' ? 'white' : 'blue-gray'} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
                  variant="text"
                  color="white"
                  size="sm"
                  ripple={false}
                  className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                  onClick={() => setOpenSidenav(false)} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>

      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                            variant="small"
                            color={sidenavType === 'dark' ? 'white' : 'blue-gray'}
                            className="font-black uppercase opacity-75" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => {
              const fullPath = `/${layout}${path}`;
              const isActive = pathname === fullPath;

              return (
                <li key={name}>
                  <Link href={fullPath} passHref>
                    <Button
                              variant={isActive ? 'gradient' : 'text'}
                              color={isActive
                                  ? sidenavColor
                                  : sidenavType === 'dark'
                                      ? 'white'
                                      : 'blue-gray'}
                              className="flex items-center gap-4 px-4 capitalize"
                              fullWidth placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {icon}
                      <Typography
                                  color="inherit"
                                  className="font-medium capitalize" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                      >
                        {name}
                      </Typography>
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </aside>
  );
}
