type MultiLineTextProps = {
  text: string;
};

export function MultiLineText({ text }: MultiLineTextProps) {
  return (
    <section className="space-y-3">
      {text.split("\n").map((line, index) => (
        <p key={index}>
          {line}
        </p>
      ))}
    </section>
  );
}
