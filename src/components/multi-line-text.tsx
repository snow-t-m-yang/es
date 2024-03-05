type MultiLineTextProps = {
  text: string;
};

export function MultiLineText({ text }: MultiLineTextProps) {
  return (
    <section className="space-y-1">
      {text.split("\n").map((line, index) => (
        <p key={index}>
          {line}
        </p>
      ))}
    </section>
  );
}
