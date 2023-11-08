import React from 'react';
import faqArray from './faqQuestion';

const FAQ = () => {
    return (
        <section className="text-gray-700">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {
                        faqArray?.map((faq) => <details
                            key={faq.id}
                            className="w-full border border-rose-300 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri text-xl">{faq.question}</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">{faq.answer}</p>
                        </details>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FAQ;