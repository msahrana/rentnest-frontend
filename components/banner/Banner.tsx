import Image from 'next/image'
import BannerImg from '../../public/assets/banner.jpg'

const Banner = () => {
  return (
    <div className="relative">
        <Image
          src={BannerImg}
          alt="Hero car"
          width={600}
          height={400}
          className="rounded-2xl"
        />
      </div>
  )
}

export default Banner
