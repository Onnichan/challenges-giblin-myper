<script setup>
import AtomLogo from "../../atoms/Logo/AtomLogo.vue";
import MoleculeInputIcon from "../../molecules/InputIcon/MoleculeInputIcon.vue";
import AtomInput from "../../atoms/Input/AtomInput.vue";
import AtomContainer from "../../atoms/Container/AtomContainer.vue";
import { useRouter} from "vue-router";

const router = useRouter();

function redirectUrl(){
  router.push('/');
}

</script>
<template>
  <header class="header-section">
    <AtomContainer>
      <div class="header-section__wrapper">
        <AtomLogo class="logo" width="300px" height="80px" @click="redirectUrl"></AtomLogo>
        <MoleculeInputIcon>
          <AtomInput />
        </MoleculeInputIcon>
      </div>
    </AtomContainer>
  </header>
</template>
<style>
.header-section__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

@media (min-width: 750px) {
  .header-section__wrapper {
    flex-direction: row;
  }
}
</style>
