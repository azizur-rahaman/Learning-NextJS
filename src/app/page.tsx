import styles from '@/app/ui/styles/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="container mx-auto p-4 relative">
                <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center">
                        <h1 className={`text-4xl font-bold mb-4 ${styles.text_wisteria}`}>Welcome</h1>
                        <p className="text-lg text-gray-700 mb-4">
                            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
                        </p>
                        <a href="/blog" className={`outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto ${styles.fit_content}`}>
                          Go to Blog
                        </a>
                    </div>
                    <div className='relative flex justify-center items-center'>

                      <Image
                        src = "https://plus.unsplash.com/premium_photo-1673448391321-ee9160646bae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt = "Welcome"
                        className='hidden md:block rounded-lg z-10'
                        width = {500}
                        height = {500}
                      />

                      <Image
                        src = "/image-mobile.jpeg"
                        alt = "Welcome"
                        className='md:hidden rounded-md'
                        width = {300}
                        height = {300}
                      />

                    </div>
                </div>

            </div>
            <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_wisteria}`}></div> 
        </main>
  );
}
