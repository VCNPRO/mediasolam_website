
import { HeroSection } from '@/components/hero-section'
import { AppsGrid } from '@/components/apps-grid'
import { FeaturesSection } from '@/components/features-section'
import { StatsSection } from '@/components/stats-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AppsGrid />
      <StatsSection />
    </div>
  )
}
