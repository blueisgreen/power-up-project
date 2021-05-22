export default function () {
  return {
    id: 'blargy-butt-123',
    title: 'Molten Salt Reactors (MSRs)',
    createdOn: new Date(),
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
