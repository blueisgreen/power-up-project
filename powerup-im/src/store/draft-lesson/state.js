export default function () {
  return {
    title: 'Molten Salt Reactors (MSRs)',
    activeSegmentId: '',
    segments: ['aaaa', 'aaab', 'aaac'],
    segmentsById: {
      aaaa: {
        id: 'aaaa',
        heading: 'Overview',
        content: 'uniqueKey1',
      },
      aaab: {
        id: 'aaab',
        heading: 'Basic Challenges of Molten Salt Reactors',
        content: ['uniqueKey2a', 'uniqueKey2b', 'uniqueKey2c'],
      },
      aaac: {
        id: 'aaac',
        heading: 'How MSRs Work',
        content: 'uniqueKey3',
      },
    },
  }
}
