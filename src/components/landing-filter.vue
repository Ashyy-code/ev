<template>
  <!--component wrap-->
  <div class="filter-wrap">
    <!--Checkbox section-->
    <div class="cb-wrap">
      <!--Main section button-->
      <button class="fr" @click="categoriesExpanded = !categoriesExpanded">
        <div class="btn-details fr">
          <i icon class="fas fa-shapes"></i>
          <span>Categories</span>
        </div>
        <i v-if="!categoriesExpanded" class="fas fa-plus"></i>
        <i v-if="categoriesExpanded" class="fas fa-minus"></i>
      </button>

      <!--checkbox list-->
      <div v-if="categoriesExpanded" class="lin">
        <!-- check all -->
        <div class="cb-item">
          <label for="inp_cat_all" class="lbl-check-all">[All]</label>
          <input
            type="checkbox"
            name="inp_cat_all"
            id="inp_cat_all"
            v-model="allcats"
            @change="checkAll('categories', $event.target)"
          />
        </div>
        <div
          class="cb-item"
          v-for="category in this.$store.state.categoryList"
          :key="category.category_id"
        >
          <label :for="'inp_filter_c_' + category.category_id">{{
            category.category_name
          }}</label>

          <!--repeated checkbox item-->
          <input
            type="checkbox"
            :id="'inp_filter_c_' + category.category_id"
            :name="category.category_name"
            :checked="category.checked"
            @change="
              category.checked = $event.target.checked;
              this.$store.state.checkFilter = true;
            "
          />
        </div>
      </div>
    </div>

    <!--Checkbox section-->
    <div class="cb-wrap">
      <!--Main section button-->
      <button class="fr" @click="venuesExpanded = !venuesExpanded">
        <div class="btn-details fr">
          <i icon class="fas fa-building"></i>
          <span>Venues</span>
        </div>
        <i v-if="!venuesExpanded" class="fas fa-plus"></i>
        <i v-if="venuesExpanded" class="fas fa-minus"></i>
      </button>

      <!--checkbox list-->
      <div v-if="venuesExpanded">
        <!-- check all -->
        <div class="cb-item">
          <label for="inp_ven_all" class="lbl-check-all">[All]</label>
          <input
            type="checkbox"
            name="inp_ven_all"
            id="inp_ven_all"
            v-model="allvens"
            @change="checkAll('venues', $event.target)"
          />
        </div>
        <div
          class="cb-item"
          v-for="venue in this.$store.state.venueList"
          :key="venue.venue_id"
        >
          <label :for="'inp_filter_v_' + venue.venue_id">{{
            venue.venue_name
          }}</label>

          <!--repeated checkbox item-->
          <input
            type="checkbox"
            :id="'inp_filter_v_' + venue.venue_id"
            :name="venue.venue_name"
            :checked="venue.checked"
            @change="
              venue.checked = $event.target.checked;
              this.$store.state.checkFilter = true;
            "
          />
        </div>
      </div>
    </div>

    <!--Checkbox section-->
    <div class="cb-wrap">
      <!--Main section button-->
      <button class="fr" @click="facilitatorsExpanded = !facilitatorsExpanded">
        <div class="btn-details fr">
          <i icon class="fas fa-user-tie"></i>
          <span>Facilitators</span>
        </div>
        <i v-if="!facilitatorsExpanded" class="fas fa-plus"></i
        ><i v-if="facilitatorsExpanded" class="fas fa-minus"></i>
      </button>

      <!--checkbox list-->
      <div v-if="facilitatorsExpanded">
        <!-- check all -->
        <div class="cb-item">
          <label for="inp_fac_all" class="lbl-check-all">[All]</label>
          <input
            type="checkbox"
            name="inp_fac_all"
            id="inp_fac_all"
            v-model="allfacils"
            @change="checkAll('facilitators', $event.target)"
          />
        </div>
        <div
          class="cb-item"
          v-for="facilitator in this.$store.state.facilitatorList"
          :key="facilitator.facilitator_id"
        >
          <label :for="'inp_filter_f_' + facilitator.facilitator_id">{{
            facilitator.facilitator_name
          }}</label>

          <!--repeated checkbox item-->
          <input
            type="checkbox"
            :id="'inp_filter_f_' + facilitator.facilitator_id"
            :name="facilitator.facilitator_name"
            :checked="facilitator.checked"
            @change="
              facilitator.checked = $event.target.checked;
              this.$store.state.checkFilter = true;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //UX state flags
  data() {
    return {
      categoriesExpanded: true,
      venuesExpanded: false,
      facilitatorsExpanded: false,
      allcats:true,
      allvens:true,
      allfacils:true,
    };
  },

  methods: {
    checkAll(type, e) {
      switch (type) {
        case "categories":
          this.$store.state.categoryList.forEach((category) => {
            category.checked = e.checked;
          });
          break;
        case "venues":
          this.$store.state.venueList.forEach((category) => {
            category.checked = e.checked;
          });
          break;
        case "facilitators":
          this.$store.state.facilitatorList.forEach((category) => {
            category.checked = e.checked;
          });
          break;
      };
      this.$store.state.checkFilter = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-wrap {
  padding: 1rem;
  background: var(--nc-teal);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background: var(--nc-teal-light);
    font-size: 115%;
    color: white;
    padding-left: 0.75rem;

    .btn-details {
      i {
        font-size: 100%;
      }
    }

    &:hover {
      background: var(--nc-teal-light-hv);
    }

    i {
      font-size: 125%;
    }
  }
}

.cb-wrap {
  overflow: hidden;

  button {
    z-index: 9999;
    position: relative;
  }
}

.lin {
  z-index: 1111;
}

.cb-item {
  display: flex;
  flex-direction: row;
  width: calc(100% - 1rem);
  padding-left: 1rem;
  background: var(--nc-teal-light);
  color: var(--nc-teal-dark);
  font-size: 90%;
  border-top: solid 1px var(--nc-teal);

  label {
    padding: 0.5rem;
    padding-left: 0;
  }

  .lbl-check-all {
    color: white;
    font-weight: bold;
    width: 100%;
  }

  input {
    margin-right: 1rem;
  }

  &:hover {
    background: var(--nc-teal-light-hv);
  }

  label {
    flex-grow: 1;
    cursor: pointer;
  }
}
/*fixes*/
label {
  user-select: none;
}
</style>