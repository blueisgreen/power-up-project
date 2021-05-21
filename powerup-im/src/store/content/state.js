export default function () {
  return {
    blocksByKey: {
      uniqueKey1: {
        id: 'uniqueKey1',
        type: 'text',
        content:
          "When it comes to liquid, it's pretty common to think of water. However, many materials melt when things get hot enough. Salt is one such material. Let's learn about how molten salt can be used in a nuclear reactor.",
      },
      uniqueKey2a: {
        id: 'uniqueKey2a',
        type: 'text',
        content:
          'The melting point of salt is perfect for handling the heat of a nuclear reaction.The vapor point is also much higher than a nuclear react will get, even if things get a little overheated. Also, as we know, when salt cools it turns into a solid.',
      },
      uniqueKey2b: {
        id: 'uniqueKey2b',
        type: 'image',
        sourceUrl:
          'https://cdn.powerup-im.com/images/lessons/MSR-schematic.png',
        caption: 'Schematic for molten salt reactor',
        altText: 'Schematic for molten salt reactor',
      },
      uniqueKey2c: {
        id: 'uniqueKey2c',
        type: 'text',
        content:
          'How does an MSR reactor keep the salt from getting too cool. And how does the salt reliquify once it does, say when the reactor is starting up? These are engineering challenges.',
      },
      uniqueKey3: {
        id: 'uniqueKey3',
        type: 'video',
        sourceUrl:
          'https://cdn.powerup-im.com/videos/molten-salt-reactors-in-action.mov',
        title: 'How a molten salt reactor works',
        caption: 'Video about molten salt reactors',
      },
    },
  }
}
