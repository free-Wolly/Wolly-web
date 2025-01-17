export default function CategoryLabel({ categories, nomargin = false }: any) {
  return (
    <div className="flex gap-3 min-h-[2rem] mt-2">
      {categories?.length
        ? categories.slice(0).map((category: any, index: number) => (
            <label key={index} style={{ color: category.attributes.textColor }}>
              {category.attributes.name}
            </label>
          ))
        : null}
    </div>
  );
}
