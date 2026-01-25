'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'О нас', href: '/about' },
  { label: 'Цены' },
  { label: 'Возможности' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Верхний бар */}
      <div className='pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6'>
        <div className='pointer-events-auto relative flex h-14 w-full items-center justify-between gap-6 overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-auto sm:justify-center'>
          {/* Градиентные пятна */}
          <div className='absolute inset-0'>
            <div className='absolute left-0 top-[-40%] h-40 w-40 rounded-full bg-white/10 blur-3xl' />
            <div className='absolute right-4 top-[-30%] h-32 w-32 rounded-full bg-[#41217c]/40 blur-3xl' />
            <div className='absolute bottom-[-60%] right-10 h-36 w-36 rounded-full bg-[#24124f]/50 blur-3xl' />
          </div>

          {/* Логотип */}
          <div className='relative z-10 flex items-center'>
            <Link
              href='/'
              className='text-lg font-semibold italic text-white transition hover:text-white/90'
            >
              Hired Valley
            </Link>
          </div>

          {/* Навигация - только десктоп */}
          <nav className='relative z-10 hidden items-center gap-5 text-sm font-medium text-white/80 sm:flex'>
            {navItems.map(item =>
              item.href ? (
                <Link
                  key={item.label}
                  className='transition hover:text-white'
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className='transition hover:text-white'
                  type='button'
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Кнопки */}
          <div className='relative z-10 flex items-center gap-2'>
            {/* Десктоп-кнопка */}
            <button
              className='hidden rounded-full bg-gradient-to-r from-[#3b1f7b] to-[#221046] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#2a1858]/40 transition hover:translate-y-[-1px] hover:shadow-[#2a1858]/60 sm:inline-flex'
              type='button'
            >
              Записаться на звонок
            </button>

            {/* Мобильный бургер */}
            <button
              type='button'
              aria-label='Открыть меню'
              className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:hidden'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Открыть меню</span>
              {isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                >
                  <path d='M6 6l12 12M18 6L6 18' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                >
                  <path d='M4 7h16M4 12h16M4 17h10' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню - выпадающее */}
      {isOpen && (
        <>
          {/* Overlay - затемнение фона */}
          <div
            className='pointer-events-auto fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden'
            onClick={() => setIsOpen(false)}
          />

          {/* Само меню */}
          <div className='pointer-events-auto fixed inset-x-4 top-20 z-50 sm:hidden'>
            <div className='overflow-hidden rounded-3xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl'>
              <div className='p-6'>
                <Link
                  href='/'
                  className='text-left text-base font-semibold italic text-white transition hover:text-white/70'
                  onClick={() => setIsOpen(false)}
                >
                  Hired Valley
                </Link>

                {/* Линки */}
                <nav className='mt-2 flex flex-col gap-4'>
                  {navItems.map(item =>
                    item.href ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className='text-left text-base font-medium text-white transition hover:text-white/70'
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        key={item.label}
                        type='button'
                        className='text-left text-base font-medium text-white transition hover:text-white/70'
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </nav>

                {/* Кнопка */}
                <button
                  type='button'
                  className='mt-6 flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3b1f7b] to-[#221046] text-sm font-semibold text-white shadow-lg shadow-[#2a1858]/40 transition hover:translate-y-[-1px] hover:shadow-[#2a1858]/70'
                  onClick={() => setIsOpen(false)}
                >
                  Записаться на звонок ↗
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
