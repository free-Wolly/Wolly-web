import Link from "next/link";

export default function CategoryLabel({ categories, nomargin = false }: any) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category: any, index: number) => (
          <Link href={`/category/${category.slug.current}`} key={index}>
            <label>{category.title}</label>
          </Link>
        ))}
    </div>
  );
}
