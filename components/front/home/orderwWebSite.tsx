import React from 'react'
import localFont from "next/font/local";
import SiteWebFormTwo from '../common/siteWebFormTwo';

const icomoonFont = localFont({
  src: "../../../../fonts/icomoon.ttf",
});

type Props = {}

function OrderwWebSite({}: Props) {
  return (
    <section className="mb-8 mt-20 section-padding bg-shikam-degrade-fonce">
        <div className="flex flex-col items-center py-10">
            <div style={icomoonFont.style} className="text-white 2xl:text-[2.5em] mb-2">c</div>
        </div>
        <SiteWebFormTwo />
    </section>
  )
}

export default OrderwWebSite