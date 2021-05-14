import React from 'react'
import {FeaturedContainer, FeaturedCard, FeaturedHeader, PostTitle} from './featuredblogelement'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedBlog = () => {
    return (
        <>  
            <FeaturedHeader>
                <div>Recent Blogs</div>
            </FeaturedHeader>
            <FeaturedContainer>
                <Link href="/posts/designing-for-efficiency">
                    <FeaturedCard>
                    <Image
                    src="/images/image1.png"
                    lt="Designing for Efficiency"
                    width={460}
                    height={220}
                    />
                    <PostTitle>Designing for Efficiency</PostTitle>
                    </FeaturedCard>
                </Link>
                <Link href="/posts/designing-for-values">
                    <FeaturedCard>
                    <Image
                    src="/images/image2.png"
                    lt="Finding Core Values"
                    width={460}
                    height={220}
                    />
                    <PostTitle>Finding Core Values</PostTitle>
                    </FeaturedCard>
                </Link>
             </FeaturedContainer>
        </>
    )
}

export default FeaturedBlog
