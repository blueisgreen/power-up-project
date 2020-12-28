<template>
  <div class="demo">
    <h2>Demo of Components for Power Up!</h2>
    <form>
      <h3>Member Info</h3>
      <BaseInput v-model="member.screenName" label="Screen Name" type="text" />
      <BaseInput v-model="member.email" label="Email" type="text" size="60" />
      <BaseSelect
        v-model="member.favoriteGenIVReactor"
        label="Fav Gen IV Reactor"
        :options="reactorTypes"
      />
      <BaseCheckbox
        v-model="member.isAgreedToTerms"
        label="I agree to the terms of use."
      />
      <BaseCheckbox
        v-model="member.isActiveSubscription"
        label="Send me the weekly newsletter."
      />

      <h4>Avatar Color</h4>
      <BaseRadio
        v-model="member.avatarColor"
        value="silver"
        label="silver"
        name="avatarColor"
      />
      <BaseRadio
        v-model="member.avatarColor"
        value="gold"
        label="gold"
        name="avatarColor"
      />
      <BaseRadio
        v-model="member.avatarColor"
        value="platinum"
        label="platinum"
        name="avatarColor"
      />

      <div class="input">
        <button class="button-right" type="submit">Push Me</button>
      </div>
    </form>
    <div>
      {{ $data }}
    </div>
  </div>
</template>

<script>
import BaseCheckbox from '../components/BaseCheckbox.vue'
export default {
  components: { BaseCheckbox },
  data: function() {
    return {
      reactorTypes: ['VHTR', 'GFR', 'SFR', 'LFR', 'MSR', 'SCWR'],
      member: {
        screenName: 'Zanzibar',
        email: 'zanzibar@happyspiritgames.com',
        favoriteGenIVReactor: 'SCWR',
        isAgreedToTerms: false,
        isActiveSubscription: true,
        avatarColor: 'silver'
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
