<template>
  <form>
    <h2>Member Info</h2>
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
      v-for="color in colors"
      v-model="member.avatarColor"
      :value="color"
      :label="color"
      :key="color"
      name="avatarColor"
    />

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
    <pre>
{{ JSON.stringify($data.member, null, 2) }}
    </pre>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      reactorTypes: ['VHTR', 'GFR', 'SFR', 'LFR', 'MSR', 'SCWR'],
      colors: ['red', 'blue', 'green', 'yellow'],
      member: {
        screenName: 'Zanzibar',
        email: 'zanzibar@happyspiritgames.com',
        favoriteGenIVReactor: 'SCWR',
        isAgreedToTerms: false,
        isActiveSubscription: true,
        avatarColor: 'gold'
      }
    }
  }
}
</script>

<style></style>
