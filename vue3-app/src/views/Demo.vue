<template>
  <div class="demo">
    <h2>Demo of Components for Power Up!</h2>
    <form>
      <h3>Member Info</h3>
      <BaseInput v-model="member.screenName" label="Screen Name" type="text" />
      <BaseInput v-model="member.email" label="Email" type="text" />
      <BaseSelect
        v-model="member.favoriteGenIVReactor"
        label="Fav Gen IV Reactor"
        :options="reactorTypes"
      />
      <button class="button-right" type="submit">Push Me</button>
    </form>
    <div>
      {{ $data }}
    </div>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
import BaseSelect from '../components/BaseSelect'

export default {
  components: {
    BaseInput,
    BaseSelect
  },
  data: function() {
    return {
      reactorTypes: ['VHTR', 'GFR', 'SFR', 'LFR', 'MSR', 'SCWR'],
      member: {
        screenName: 'Zanzibar',
        email: 'zanzibar@happyspiritgames.com',
        favoriteGenIVReactor: 'SCWR'
      }
    }
  }
}
</script>

<style>
label {
  margin-right: 1em;
  font-weight: bold;
}
.button-right {
  margin-left: 1em;
}
button {
  font-size: small;
  font-weight: bold;
  background-color: paleturquoise;
}
</style>
