import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'
import { Hero } from '../components/Hero'
import { FeatureGrid } from '../components/FeatureGrid'
import { Steps } from '../components/Steps'
import { LeadCapture } from '../components/LeadCapture'
import { FaqSection } from '../components/FaqSection'
import { FinalCta } from '../components/FinalCta'

const heroImg =
  'https://images.unsplash.com/photo-1544191696-2219285911f8?auto=format&fit=crop&w=1280&q=75'

export function HoustonDownsizingHelpPage() {
  return (
    <>
      <Seo
        title="Houston Downsizing Help | RunMySale"
        description="Houston homeowners: downsize faster with RunMySale. Match with vetted affiliates who understand local buyers, HOAs, weather-ready pickups, and mixed online/offline selling strategies."
        path="/houston-downsizing-help"
      />
      <Header />
      <main id="main-content">
        <Hero
          eyebrow="Houston and surrounding areas"
          title="Houston downsizing help built for heat, humidity, and hurry"
          subtitle="From Inner Loop townhomes to Sugar Land estates, RunMySale affiliates know how to keep items protected in transit, coordinate tight elevator windows, and market to Houston's diverse buyer pool."
          imageSrc={heroImg}
          imageAlt="Houston skyline at dusk"
        />
        <FeatureGrid
          id="local"
          title="Why Houston households use RunMySale"
          lead="Local context matters when you are racing a closing date or helping parents move closer to family."
          features={[
            {
              title: 'Neighborhood-aware selling',
              body: 'Affiliates tune pricing and marketing channels to what actually moves in your part of the metro.',
            },
            {
              title: 'Logistics that respect HOA rules',
              body: 'Need staged pickups or quiet hours? Communicate requirements up front inside the app.',
            },
            {
              title: 'Heat-smart handling',
              body: 'Electronics, wax, adhesives, and textiles benefit from pros who know how to pack for Texas weather.',
            },
          ]}
        />
        <Steps
          title="Your Houston downsizing playbook"
          steps={[
            {
              title: 'Download RunMySale',
              body: 'Enter your ZIP, timeline, and the property type you are clearing.',
            },
            {
              title: 'Meet Houston-area affiliates',
              body: 'Compare reviews, services, and availability without endless phone tag.',
            },
            {
              title: 'Hire and track progress',
              body: 'Stay on top of pickups, payouts, and next steps from your phone.',
            },
          ]}
        />
        <LeadCapture
          heading="Need Houston downsizing help this month?"
          subheading="We will route you to affiliates who are actively taking new jobs in your ZIP."
        />
        <FaqSection
          items={[
            {
              q: 'Do you serve suburbs outside Beltway 8?',
              a: 'Coverage depends on active affiliates. Enter your ZIP in the app to see who is available for on-site help.',
            },
            {
              q: 'Can RunMySale help with storm-prep decluttering?',
              a: 'Many customers use the same workflow to clear carports and garages ahead of hurricane season. Mention your goal when you submit a request.',
            },
            {
              q: 'What if I am helping parents downsize remotely?',
              a: 'Adult children often coordinate through the app while affiliates meet parents on-site. Share access details with your family before booking.',
            },
          ]}
        />
        <FinalCta
          title="Bring Houston-level hustle to your move"
          body="Download RunMySale on iOS or Android to see which affiliates are ready for your ZIP."
        />
      </main>
      <Footer />
    </>
  )
}
