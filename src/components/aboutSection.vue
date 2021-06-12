<template>
    <!-- ======= About Section ======= -->
    <section id="hero">
        <div class="hero-container" data-aos="fade-up" data-aos-delay="150">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h1>What is Zookeeper?</h1>
                    </div>
                    <div class="col-6">
                        <h4 class="about-description">ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. All of these kinds of services are used in some form or another by distributed applications. Each time they are implemented there is a lot of work that goes into fixing the bugs and race conditions that are inevitable. Because of the difficulty of implementing these kinds of services, applications initially usually skimp on them, which make them brittle in the presence of change and difficult to manage. Even when done correctly, different implementations of these services lead to management complexity when the applications are deployed.

                            Learn more about ZooKeeper on the ZooKeeper Wiki</h4>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End Hero -->
</template>

<script>
    export default {
        name: "coverSection.vue"
    }
</script>

<style scoped>
.about-description{
    color: white;
    text-align: left;
    line-height: 150%;
    font-weight: 100;
}
</style>