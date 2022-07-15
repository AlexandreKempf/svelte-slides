<script>
    import Vizzu from '../../lib/Vizzu.svelte';
    import { data } from 'https://lib.vizzuhq.com/test/integration/test_data/infinite_data.js?client';
</script>

<div class="main m-auto">
    <div class="box animate__animated animate__fadeInLeft">
        <Vizzu
            options={[
                (chart) =>
                    chart.animate({
                        data: data,
                        config: {
                            channels: {
                                x: { set: ['Value 1', 'Joy factors'] },
                                color: { set: ['Joy factors'] },
                                label: { set: ['Value 1'] },
                            },
                            coordSystem: 'polar',
                            legend: null,
                        },
                        style: {
                            logo: { width: 0 },
                            plot: {
                                marker: {
                                    label: {
                                        fontSize: 13,
                                        orientation: 'tangential',
                                        angle: 4.7,
                                    },
                                },
                                xAxis: {
                                    title: { color: '#ffffff00' },
                                    label: { color: '#ffffff00' },
                                    ticks: { color: '#ffffff00' },
                                    interlacing: { color: '#ffffff00' },
                                },
                                yAxis: {
                                    color: '#ffffff00',
                                    title: { color: '#ffffff00' },
                                    label: { color: '#ffffff00' },
                                    ticks: { color: '#ffffff00' },
                                },
                            },
                        },
                    }),
                (chart) => {
                    chart.animate(
                        {
                            config: {
                                channels: {
                                    x: {
                                        set: ['Value 1', 'Joy factors', 'Region', 'Country code'],
                                    },
                                    label: { set: null },
                                },
                            },
                        },
                        '500ms',
                    );
                    chart.animate({
                        config: {
                            channels: {
                                x: {
                                    set: ['Value 1', 'Joy factors', 'Region', 'Country code'],
                                },
                                y: {
                                    set: ['Value 3'] /* Setting the radius of the empty circlein the centre. */,
                                    range: { min: '-60%' },
                                },
                            },
                        },
                        style: {
                            plot: {
                                marker: {
                                    borderWidth: 0,
                                    borderOpacity: 1,
                                },
                            },
                        },
                    });
                },
                (chart) =>
                    chart.animate({
                        config: {
                            channels: {
                                x: {
                                    set: ['Joy factors', 'Region', 'Country code', 'Value 1'],
                                },
                                color: { set: ['Joy factors'] },
                            },
                            coordSystem: 'cartesian',
                            legend: null,
                        },
                    }),
                (chart) =>
                    chart.animate({
                        config: {
                            channels: {
                                x: {
                                    set: ['Joy factors', 'Value 1'],
                                },
                                color: { set: ['Joy factors'] },
                                label: { set: ['Value 1'] },
                            },
                            coordSystem: 'cartesian',
                            legend: null,
                        },
                    }),
            ]}
        />
    </div>
    <div class="box animate__animated animate__fadeInUp">
        <p class="label">Component</p>
        <h1 class="text-left">Tell a story with your data</h1>
        <p class="major">
            Supports <a href="https://vizzuhq.com/">Vizzu</a>
            charts. <br />
            Click on the chart several times to trigger the animations <br />
        </p>
    </div>
</div>
