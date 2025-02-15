import Link from 'next/link';
import type { PostField } from '~/types/post';

type PostCardProps = Pick<PostField, 'slug' | 'title' | 'desc' | 'categories' | 'author' | 'github'> & {
  cover?: string;
};

export function PostCard({
  slug,
  title,
  desc,
  categories,
  author,
  github,
  cover = '/image/sample.jpg',
}: PostCardProps) {
  return (
    <>
      <style jsx>
        {`
          p,
          a {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        `}
      </style>
      <div className="flex flex-col flex-wrap justify-start shadow-lg rounded-md overflow-hidden font-sans print:shadow-none print:border dark:bg-neutral-800">
        <img className="h-[10rem] object-cover w-full bg-neutral-100" src={cover} alt={slug} />
        <div className="p-4 print:p-2">
          <div className="flex flex-wrap gap-1 mb-2">
            {categories &&
              categories.map((category: string, idx: number) => (
                <span
                  className="text-xs px-2 py-1 rounded-sm bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300 uppercase font-semibold print:px-1 print:border"
                  key={`${idx}-${category}`}
                >
                  {category}
                </span>
              ))}
          </div>
          <div className="py-1">
            <Link href={`/posts/${slug}`}>
              <a className="text-xl font-bold capitalize font-display text-gray-800 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-200 ">
                {title}
              </a>
            </Link>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-100 mb-2 font-serif">{desc}</p>
          </div>
          <a className="group" href={`https://github.com/${github}`}>
            <div className="flex items-center justify-start">
              <img
                className="rounded-full shadow-md"
                src={`https://github.com/${github}.png`}
                width="32"
                height="32"
                alt="author"
              />
              <span className="text-sm ml-2 text-left text-gray-700 group-hover:text-primary-600 dark:text-gray-300 dark:group-hover:text-primary-200">
                {author}
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
