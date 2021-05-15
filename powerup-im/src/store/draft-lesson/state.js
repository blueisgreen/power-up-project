export default function () {
  return {
    title: 'Blargy Pants',
    activeSegmentId: '',
    segments: ['aaaa', 'aaab', 'aaac'],
    segmentsById: {
      aaaa: {
        id: 'aaaa',
        heading: 'Overview',
        content:
          'A wide variety of nuclear reactors are in use today, and <em>more</em> are being invented.',
      },
      aaab: {
        id: 'aaab',
        heading: 'Molten Salt Reactor (MSR)',
        content:
          'This reactor type relies on liquid sodium to receive and transfer massive amounts of heat energy.',
      },
      aaac: {
        id: 'aaac',
        heading: 'Very High-Temperature Reactor (VHTR)',
        content: 'Do not touch this one. You will be in for a nasty burn.',
      },
    },
  }
}
