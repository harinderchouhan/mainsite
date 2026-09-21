// Renders a JSON-LD <script> tag. `<` is escaped so content can never
// break out of the script tag (e.g. a post title containing "</script>").
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
