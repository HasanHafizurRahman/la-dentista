import ladentistaHero from "../assets/ladentistaHero.png"
const Hero = () => {
  return (
    <div className="px-[144px]">
      <div className="max-width mx-auto">
        <div className="flex items-center justify-between">
          <div>
<h1 className="text-[40px] font-bold">Enhance Your Dental Life</h1>
<h1 className="text-[40px] text-primary-0 font-bold">Dental Profession</h1>
<p>La Dentista, Your Digital Partner</p>
          </div>
          <div>
            <img src={ladentistaHero} alt="ladentistaHero" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero