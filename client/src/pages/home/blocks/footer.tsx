import { Link } from 'react-router-dom'
import * as React from 'react'

import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io'

export default function Footer () {
  return (
        <div className="bg-blue-900 text-white flex justify-center gap-32 py-10 md:grid">
            <div>
                <p className="mb-6">Follow us</p>
                <div className="flex text-3xl gap-2">
                    <Link to=""><AiFillFacebook/></Link>
                    <Link to=""><AiFillTwitterSquare/></Link>
                    <Link to=""><AiFillLinkedin/></Link>
                    <Link to=""><IoLogoYoutube/></Link>
                </div>

            </div>
            <div>
                <p className="text-xl font-semibold mb-8">About</p>
                <div className="grid gap-1">
                    <Link to="">who are we?</Link>
                    <Link to="">how it works?</Link>
                    <Link to="">why trust me?</Link>
                </div>
            </div>
            <div>
                <p className="text-xl font-semibold mb-8">Contact</p>
                <div className="grid gap-1">
                    <Link to="">sobha chlef algeria</Link>
                    <Link to="">Email:</Link>
                    <Link to="">contact@WADDIF.com</Link>
                </div>
            </div>
        </div>
  )
}
