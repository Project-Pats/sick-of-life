"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Header from "./Header";
import AudioPlayer from "./AudioPlayer";
export default function Component() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen lex justify-center">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4"># hobbies</h2>
            <ul className="list-none space-y-2">
              <li>- virtual reality and streaming in VR</li>
              <li>- linux system administration</li>
              <li>- basic networking stuff</li>
              <li>- self-hosting and data hoarding</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4"># skills</h2>
            <ul className="list-none space-y-2">
              <li>- typescript/javascript [node/bun, react/svelte]</li>
              <li>- golang [fasthttp, gin, gorm, fx]</li>
              <li>- postgresql / mongodb / redis</li>
              <li>- rabbitmq</li>
            </ul>
          </section>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4"># really boring info</h2>
          <ul className="list-none space-y-2">
            <li>- pronouns: he/they/any</li>
            <li>- timezone: gmt+4 (18:16:11)</li>
            <li>- languages: en-US, ru-RU</li>
            <li>- location: georgia</li>
            <li>- e-mail: </li>
            <li>
              - pgp fingerprint: ED63 0449 995C CA06 20E2 FF36 73A1 046C 20A5
              E014
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4"># music</h2>
          <p className="text-sm text-gray-500 mb-4">
            last.fm music that i was recently listening to; fetched from my
            last.fm profile
          </p>
          <div className="flex space-x-4 overflow-x-auto">
            {["Lxner", "44neverluv", "2kizz", "44neverluv", "WE!"].map(
              (artist, index) => (
                <div key={index} className="flex-shrink-0 w-20 text-center">
                  <div className="w-20 h-20 bg-gray-700 rounded mb-2"></div>
                  <p className="text-xs">{artist}</p>
                  <p className="text-xs text-gray-500">Song Title</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4"># anonymous letterbox</h2>
          <p className="text-sm text-gray-500 mb-4">
            you can say anything you want here, and i'll read it without knowing
            who you are o.o
          </p>
          <div className="flex">
            <Input
              type="text"
              placeholder="your silly message goes here :3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow mr-2 bg-gray-800 border-gray-700 text-white"
            />
            <Button variant="outline">
              <span className="text-xl">&gt;</span>
            </Button>
          </div>
        </section>
        <AudioPlayer src="/audio.flac" />
      </div>
    </div>
  );
}
