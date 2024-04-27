const ContentRenderer = ({ content }) => {
  // Initialize formatted content
  const formattedContent = [];

  // Split the content into paragraphs based on newline characters
  const paragraphs = content.split("\n");

  // Iterate over each paragraph
  paragraphs.forEach((paragraph, index) => {
    // Check if the paragraph is a subheading (assuming subheadings are preceded by '#')
    if (paragraph.startsWith("#")) {
      // Assuming '#' is followed by space and the subheading text
      const subheadingText = paragraph.substring(2).trim(); // Remove '#' and trim any extra whitespace
      formattedContent.push(
        <h2 key={index} className="font-bold my-2 text-[18px]">
          / {subheadingText}
        </h2> // Apply bold and margin using Tailwind classes
      );
    } else {
      // Otherwise, treat it as a paragraph
      formattedContent.push(
        <p key={index} className="mb-8">
          {paragraph}
        </p>
      );
    }
  });

  return <div>{formattedContent}</div>;
};

export default ContentRenderer;
