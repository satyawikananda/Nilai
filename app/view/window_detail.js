/*
 * File: app/view/window_detail.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SistemInformasiNilai.view.window_detail', {
    extend: 'Ext.window.Window',
    alias: 'widget.window_detail',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.chart.Chart',
        'Ext.util.Point',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.button.Button'
    ],

    height: 390,
    width: 450,
    title: 'Cetak Nilai',
    modal: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    flex: 1,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'NIS',
                            name: 'Nis_',
                            value: 'AKWOKWAOK'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Nama',
                            name: 'NamaSiswa_',
                            value: 'AKWOKWAOK'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Kelas',
                            name: 'NamaKelas_',
                            value: 'AKWOKWAOK'
                        }
                    ]
                },
                {
                    xtype: 'chart',
                    height: 200,
                    width: 400,
                    animate: true,
                    insetPadding: 20,
                    store: 'StoreChartNilai',
                    theme: 'Category2',
                    axes: [
                        {
                            type: 'Category',
                            fields: [
                                'Label_'
                            ],
                            position: 'bottom'
                        },
                        {
                            type: 'Numeric',
                            fields: [
                                'Nilai_'
                            ],
                            title: 'Nilai',
                            position: 'left'
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            xField: 'Label_',
                            yField: 'Nilai_',
                            smooth: 3
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '10 10 10 10',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'end'
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 0,
                            cls: 'btnWindowBatal',
                            itemId: 'btnCetakNilaiBatal',
                            style: '{\n    background: #ff2d55;\n    border: none;\n}',
                            text: 'Batal'
                        },
                        {
                            xtype: 'button',
                            flex: 0,
                            cls: 'btnWindowBatal',
                            itemId: 'btnCetakNilaiSimpan',
                            style: '{\n    background: #4cd964;\n    border: none;\n}',
                            text: 'Cetak'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});