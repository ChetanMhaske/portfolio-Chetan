import PageContainer from "./PageContainer";

function Section({ children, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}

export default Section;