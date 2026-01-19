'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

export const TestimonialsBlock = ({ heading, items }: any) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;

    const { clientWidth } = sliderRef.current;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -clientWidth : clientWidth,
      behavior: 'smooth',
    });
  };

  if (!items?.length) return null;

  return (
    <section className="container py-2 mb-8">
      <div className="animate-on-scroll">
        {/* Heading + Controls */}
        <div className="mb-4 flex items-center justify-between">
          <div className='prose'>
            <h2>{heading}</h2>
          </div>

          {items.length > 3 && (
            <div className="hidden gap-2 md:flex">
              <button
                onClick={() => scroll('left')}
                className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className="rounded-md border px-3 py-1 text-sm hover:bg-gray-100"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="
          max-w-100 flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth
          snap-x snap-mandatory pb-4
        "
        >
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="
              snap-start
              min-w-full
              sm:min-w-[calc(50%-0.75rem)]
              lg:min-w-[calc(33.333%-1rem)]
            "
            >
              <div className="relative h-full rounded-xl bg-gray-50 p-8 shadow-sm">
                <div className="mb-0 text-5xl font-bold text-blue-600" style={{ lineHeight: '0.5' }}>
                  “
                </div>

                <p className="mb-8 text-base leading-relaxed text-gray-800">
                  {item.message}
                </p>

                <div className="flex items-center gap-4">
                  {item.image?.url && (
                    <Image
                      src={item.image.url}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}

                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};