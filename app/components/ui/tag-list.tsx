export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <div className="tags">
      {tags.map(tag => <span key={tag}>{tag}</span>)}
    </div>
  );
}
