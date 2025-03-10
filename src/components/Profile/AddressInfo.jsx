import InfoField from './InfoField'
import Section from './Section'

const AddressInfo = ({ country, cityState, isEditing, editedData, onChange }) => {
    return (
        <Section title="Address">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <InfoField label="Country" value={country} name="country" isEditing={isEditing} editedValue={editedData?.country} onChange={onChange} />
                <InfoField label="City/State" value={cityState} name="cityState" isEditing={isEditing} editedValue={editedData?.cityState} onChange={onChange} />
            </div>
        </Section>
    )

}

export default AddressInfo;