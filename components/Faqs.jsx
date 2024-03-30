import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className=" md:px-5 py-10 flex flex-col items-center" id="faqs">
      <h2 class="mb-3">FAQs</h2>
      <Accordion type="single" collapsible className="w-[100%] md:w-[50%]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start md:text-lg">
            What is Reply Buddy?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            Reply Buddy is a tool designed to help you generate creative twitter
            / X and LinkedIn replies quickly. Our tool integrates seamlessly
            with Twitter / X and LinkedIn through a Google-featured Chrome
            extension
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start md:text-lg">
            How does it work?
          </AccordionTrigger>
          <AccordionContent className="text-start ">
            Once you install our Chrome extension, every time you try to reply a
            button will appear and you just have to click on it to generate a
            reply.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-start md:text-lg">
            How does Reply Buddy work?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            Our reply generator analyzes your input, understands the context,
            and generates creative, relevant replies that you can use directly
            or modify as needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-start md:text-lg">
            Do the replies look AI generated?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            No. We have a custom AI model that generates human like replies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-start md:text-lg">
            What is the refund policy?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            We do not offer any refunds at this time because we have a free
            trial for you to try out the product.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-start md:text-lg">
            Can I get help from a real person?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            Absolutely! Our support team is here to assist you. You can reach
            out to us through out email replybuddy.com@gmail.com
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
