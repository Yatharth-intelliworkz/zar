'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const BEFORE_ROUTE_CHANGE_MS = 500;
const AFTER_ROUTE_CHANGE_MS = 500;

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const pendingHrefRef = useRef<string | null>(null);
  const hasPendingNavigationRef = useRef(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute('href');
      if (!hrefAttr) return;
      if (hrefAttr.startsWith('#')) return;
      if (hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      const nextUrl = new URL(anchor.href, window.location.href);
      if (nextUrl.origin !== window.location.origin) return;

      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const nextRoute = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
      if (currentUrl === nextRoute) return;
      if (hasPendingNavigationRef.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      hasPendingNavigationRef.current = true;
      pendingHrefRef.current = nextRoute;
      setIsEntering(false);
      setIsLeaving(true);

      leaveTimerRef.current = setTimeout(() => {
        if (pendingHrefRef.current) {
          router.push(pendingHrefRef.current);
        }
      }, BEFORE_ROUTE_CHANGE_MS);
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, [router]);

  useEffect(() => {
    if (!hasPendingNavigationRef.current) return;

    setIsLeaving(false);
    setIsEntering(true);

    enterTimerRef.current = setTimeout(() => {
      setIsEntering(false);
      hasPendingNavigationRef.current = false;
      pendingHrefRef.current = null;
    }, AFTER_ROUTE_CHANGE_MS);

    return () => {
      if (enterTimerRef.current) {
        clearTimeout(enterTimerRef.current);
      }
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    const active = isLeaving || isEntering;
    document.body.classList.toggle('route-transition-active', active);

    if (isLeaving) {
      document.body.classList.add('route-transition-leaving');
    } else {
      document.body.classList.remove('route-transition-leaving');
    }

    if (isEntering) {
      document.body.classList.add('route-transition-entering');
    } else {
      document.body.classList.remove('route-transition-entering');
    }
  }, [isLeaving, isEntering]);

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
      if (enterTimerRef.current) {
        clearTimeout(enterTimerRef.current);
      }

      document.body.classList.remove(
        'route-transition-active',
        'route-transition-leaving',
        'route-transition-entering'
      );
    };
  }, []);

  return (
    <div
      className={cn(
        'page-transition-shell',
        isLeaving && 'page-transition-leaving',
        isEntering && 'page-transition-entering'
      )}
    >
      {children}
    </div>
  );
}
