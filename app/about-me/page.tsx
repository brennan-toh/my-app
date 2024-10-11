import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'
import legoat from "@/app/about-me/i.png"

export default function AboutMe() {
  return (
    <div>
        Hello world this is the about me route
        <Card>
            <CardHeader>
                <CardTitle>
                    I'm Brennan
                </CardTitle>
                <CardDescription>
                    I like to relax hehe
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src ={legoat} alt = 'lebron'/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Brennan
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to wear black</div>
            </CardContent>
        </Card>
    </div>
  );
}