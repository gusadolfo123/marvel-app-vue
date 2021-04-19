<template>
  <div class="row">
    <div class="col-5">
      <h4>Search Form</h4>
      <hr />
      <form>
        <input
          autoComplete="off"
          type="text"
          name="search"
          placeholder="Find your hero"
          class="form-control"
        />
        <button type="submit" class="btn btn-outline-info mt-2">Search</button>
      </form>
    </div>
    <div class="col-7">
      <h4>Results</h4>
      <hr />

      <!-- {q === "" &&
      <div class="alert alert-info">Search Hero.</div>
      } {q !== "" && heroesFilter.length === 0 && (
      <div class="alert alert-danger">No Hero Found With {q}</div>
      )} {heroesFilter.map((hero) => (
      <HeroCard key="{hero.id}" {...hero} />
      ))} -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>