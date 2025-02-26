import InfoField from './InfoField'
import Section from './Section'

const AddressInfo = ({ country, cityState }) => {
    return (
        <Section title="Address">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <InfoField label="Country" value={country} />
                <InfoField label="City/State" value={cityState} />
            </div>
        </Section>
    )

}

export default AddressInfo;