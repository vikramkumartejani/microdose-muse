import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'

const SingleBlog = () => {
    const relatedArticles = [
        {
            id: 1,
            title: "Wake up and smell the nature",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: "/assets/blog-one.png",
            link: "/single-blog",
        },
        {
            id: 2,
            title: "Wake up and smell the nature",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: "/assets/blog-two.png",
            link: "/single-blog",
        },
        {
            id: 3,
            title: "Wake up and smell the nature",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: "/assets/blog-three.png",
            link: "/single-blog",
        },
        {
            id: 4,
            title: "Wake up and smell the nature",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: "/assets/blog-four.png",
            link: "/single-blog",
        },
    ];
  return (
    <>
        <div className='pt-[120px] md:pt-[140px] pb-[40px] md:pb-[89px] w-full px-4 lg:px-20 2xl:px-40'>
            <p className='text-center text-[#454545] text-[28px] sm:text-[40px] leading-normal font-alethia font-normal'>The Essential Guide To  Peaceful Life</p>
            <div>
                <Image src='/assets/blog-five.png' alt='singal-blog' width={1284} height={421} className='min-h-[200px] my-5 md:my-10' />
                <div className='max-w-[1066px] mx-auto w-full'>
                    <div className='flex items-center flex-col justify-center gap-[5px]'>
                        <Image src='/assets/leslie-alexander.svg' alt='leslie-alexande' width={67} height={67} />
                        <h1 className='font-alethia text-[20px] sm:text-[24px] font-normal text-black mt-[9px]'>Leslie Alexander</h1>
                        <h3 className='text-[#DCB88C] text-[18px] sm:text-[18px] font-normal font-alethia'>Team Leader</h3>
                    </div>
                    <h1 className='mt-2 text-[#454545] font-alethia text-[20px] sm:text-[42px] font-normal sm:leading-[67px]'>Exploring the Psychedelic Realm: A Journey Through the Mind</h1>
                    <p className='mt-[10px] sm:mt-[15px] text-[#454545] text-[14px] sm:text-[15px] sm:leading-[24px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className='mt-[10px] sm:mt-[24px] text-[#454545] text-[14px] sm:text-[15px] sm:leading-[24px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='my-4 sm:my-6 flex items-center gap-[16.5px]'>
                        <Link href='/'><Image src='/assets/facebook-icon.svg' alt='facebook' width={45} height={45} className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]'/></Link>
                        <Link href='/'><Image src='/assets/twitter-icon.svg' alt='twitter' width={45} height={45} className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]'/></Link>
                        <Link href='/'><Image src='/assets/share-icon.svg' alt='share' width={45} height={45} className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]'/></Link>
                    </div>
                    <div className='flex items-center sm:flex-row flex-col gap-5 overflow-x-auto'>
                        <Image src='/assets/image-one.png' alt='image-one' width={523} height={348} className='  w-full ' />
                        <Image src='/assets/image-two.png' alt='image-one' width={523} height={348} className='  w-full ' />
                    </div>

                    <div className='mt-5 sm:mt-8 mb-[20px] sm:mb-[90px] flex flex-col items-start gap-2 sm:gap-5'>
                        <div>
                            <h1 className='text-[#454545] text-[18px] sm:text-[24px] sm:leading-[38px] font-normal font-alethia'>History of Psychedelics</h1>
                            <ul className='mt-1 sm:mt-[10px] ml-4'>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Dive into the rich history of psychedelic substances, from ancient rituals to the psychedelic revolution of the 1960s.</li>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Explore how psychedelics have been used in different cultures for spiritual and healing purposes.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#454545] text-[18px] sm:text-[24px] sm:leading-[38px] font-normal font-alethia'>Science Behind Psychedelics:</h1>
                            <ul className='mt-1 sm:mt-[10px] ml-4'>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Learn about the neuroscience of psychedelics and how they interact with the brain to induce altered states of consciousness.</li>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Discover the potential therapeutic benefits of psychedelics in treating mental health conditions.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#454545] text-[18px] sm:text-[24px] sm:leading-[38px] font-normal font-alethia'>Art and Psychedelics:</h1>
                            <ul className='mt-1 sm:mt-[10px] ml-4'>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Delve into the world of psychedelic art and its representation of altered states of consciousness.</li>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Explore how artists have been inspired by psychedelics to create mind-bending and visually stimulating works of art.</li>
                            </ul>
                        </div>
                    </div>

                    <Image src='/assets/image-three.png' alt='image' width={1066} height={348} className='min-h-[200px]' />
                    <div className='mt-5 sm:mt-[36px] flex flex-col items-start gap-2 sm:gap-5'>
                        <div>
                            <h1 className='text-[#454545] text-[18px] sm:text-[24px] sm:leading-[38px] font-normal font-alethia'>Personal Experiences:</h1>
                            <ul className='mt-1 sm:mt-[10px] ml-4'>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Read firsthand accounts of individuals who have embarked on psychedelic journeys and the profound insights they have gained.</li>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Explore the transformative power of psychedelic experiences on personal growth and spiritual development.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#454545] text-[18px] sm:text-[24px] sm:leading-[38px] font-normal font-alethia'>Psychedelic Culture and Community:</h1>
                            <ul className='mt-1 sm:mt-[10px] ml-4'>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Discover the vibrant psychedelic culture and community that embraces exploration, self-discovery, and interconnectedness.</li>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Learn about psychedelic festivals, events, and gatherings that celebrate the psychedelic experience.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#454545] text-[18px] sm:text-[24px] sm:leading-[38px] font-normal font-alethia'>Conclusion:</h1>
                            <ul className='mt-1 sm:mt-[10px] ml-4 flex flex-col gap-2'>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Our Psychedelic Blog is a hub for those curious about expanding their consciousness, seeking spiritual insights, and embracing the beauty of the psychedelic realm. Join us as we navigate the mystical world of psychedelics and embark on a journey of self-discovery and enlightenment.</li>
                                <li className='list-disc text-[#454545] text-[13px] sm:text-[15px] sm:leading-[24px] font-normal'>Remember, while exploring psychedelics, always prioritize safety, legality, and responsible use. Let&apos;s embark on this enlightening journey together!</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-4 pb-8 sm:pb-[60px] md:pb-[112px] border-b border-[#D9D9D9] flex items-center gap-3 sm:gap-5'>
                        <h3 className='text-black text-[15px] leading-[24px] font-normal'>Tags:</h3>
                        <div className='flex items-center gap-2.5 sm:gap-[16.5px]'>
                            <Link href='/'><Image src='/assets/facebook-icon.svg' alt='facebook' width={45} height={45} className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]'/></Link>
                            <Link href='/'><Image src='/assets/twitter-icon.svg' alt='twitter' width={45} height={45} className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]'/></Link>
                            <Link href='/'><Image src='/assets/share-icon.svg' alt='share' width={45} height={45} className='w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]'/></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Articles */}
            <div className='mt-6 sm:mt-[35px]'>
                <h2 className='text-[#454545] font-alethia text-[20px] sm:text-[24px] leading-[38px] font-normal mb-[14px] sm:mb-[18px]'>Related Articles</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5'>
                    {relatedArticles.map((post) => (
                        <div key={post.id} className='w-full rounded-lg shadow-lg overflow-hidden relative group'>
                            <img src={post.image} alt='blog-image' className="w-full h-[250px] sm:h-[370px] object-cover " />
                            <div className="w-full absolute bottom-0 h-full flex items-end justify-end flex-col px-2 sm:px-5 py-3 sm:py-4 ">
                                <div className='min-w-full w-full flex items-center justify-between flex-col gap-1'>
                                    <h2 className="font-normal text-white text-[12px] sm:text-[18px] sm:leading-[25px] capitalize font-alethia">{post.title}</h2>
                                    <p className="mb-1 text-[#FFF] text-[9px] font-normal font-poppins">{post.description}</p>
                                    <Link href={post.link} className='text-white flex items-center justify-center w-full min-h-[25px] sm:min-h-[38px] bg-[#DCB88C] rounded sm:rounded-lg text-[8px] sm:text-[12px] font-medium sm:font-semibold leading-[14px]'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default SingleBlog