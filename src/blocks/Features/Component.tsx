import React from 'react';
import Image from 'next/image';

export const FeaturesBlock = ({ heading, items }: any) => {
  return (
    <section className="container mb-16">
      <div className="animate-on-scroll">
        <div className="prose mb-4">
          <h2>{heading}</h2>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {items?.map((item: any, index: number) => {
            if (typeof item === 'object' && item !== null) {
              const { title, description, image: metaImage } = item;
              const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

              return (
                <div className="col-span-4" key={index}>
                  <div className=" h-full border border-border rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(15, 15, 15, 0.9)' }}>
                    <div className="p-4 pb-0">
                      <div className="overflow-hidden rounded">
                        {!metaImage && <div>No image</div>}

                        {metaImage && typeof metaImage !== 'string' && (
                          <Image
                            src={item.image.url}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="
                            w-full
                            object-cover
                            transition-transform
                            duration-300
                            ease-out
                            hover:scale-110
                          "
                            style={{ aspectRatio: '8 / 5' }}
                          />
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      {item.title && (
                        <div className="prose">
                          <h3>
                            {/* <Link className="not-prose" href={href} ref={link.ref}> */}
                            {item.title}
                            {/* </Link> */}
                          </h3>
                        </div>
                      )}
                      {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
                    </div>
                  </div>
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </section>
  );
};