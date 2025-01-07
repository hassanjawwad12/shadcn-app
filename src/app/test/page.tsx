import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const page = () => {
    const faq = [
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern."
        },
        {
            question: "How do I get started?",
            answer: "You can get started by following the setup guide in our documentation."
        },
        {
            question: "Can I customize the theme?",
            answer: "Yes, the theme is fully customizable using the provided configuration options."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial for all new users."
        },
        {
            question: "What kind of support do you offer?",
            answer: "We offer 24/7 support via email, chat, and our community forum."
        }
    ];
    return (
        <div className='bg-gray-800 text-white text-4xl min-h-screen w-full  flex flex-col items-center justify-center'>
            <Button variant='chai' size='lg'>Shadcn button</Button>
            <p className='text-2xl text-white font-bold'>Now we will see the accordian</p>
            <main className='w-[500px] p-4'>
                <Accordion type="single" collapsible>
                    {faq.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </main>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button variant='chai' size='lg'>Open</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    )
}

export default page