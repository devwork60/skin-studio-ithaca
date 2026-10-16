interface QuoteBlockProps {
  quote: string;
  attribution: string;
}

// Boxed pull-quote with a small attribution line.
const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, attribution }) => (
  <figure className="rounded-xl border border-border-subtle bg-dark-primary/30 p-6">
    <blockquote className="font-serif text-[18px] font-normal italic leading-[110%] text-ivory/80">
      &ldquo;{quote}&rdquo;
    </blockquote>
    <figcaption className="mt-2 font-sans text-[13px] leading-[150%] text-body-muted/60">
      — {attribution}
    </figcaption>
  </figure>
);

export default QuoteBlock;
