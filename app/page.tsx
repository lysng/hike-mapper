import dynamic from 'next/dynamic'
import { FilterSlider } from '@/components/filter-slider'
import { FilterSelector } from '@/components/filter-selector'


const DynamicMap = dynamic(() => import('@/components/map'), { ssr: false })

export default function IndexPage() {

  const states = ['New South Wales', 'Victoria', 'Queensland', 'Tasmania', 'South Australia', 'Western Australia', 'Northern Territory', 'Australian Capital Territory', 'Other']

  const duration = ['Shortie', 'Day Hike', 'Overnighter', 'Multiday', 'Journey']

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          A map about hikes. <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Find your perfect hike for any occasion.
        </p>
      </div>

      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <DynamicMap />
        </div>
        <div className="col-span-1">
          <FilterSlider filterName='Length' defaultValue={[50]} maxAmount={100} step={5} />
          <FilterSlider filterName='Grade' defaultValue={[3]} maxAmount={6} />
          <FilterSelector selectorTitle='State' data={states} />
          <FilterSelector selectorTitle='Duration' data={duration} />
        </div>
      </div>
    </section>
  )
}
