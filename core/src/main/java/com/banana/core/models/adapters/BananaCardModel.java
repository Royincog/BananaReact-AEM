package com.banana.core.models.adapters;

import com.adobe.cq.export.json.ComponentExporter;


public interface BananaCardModel extends ComponentExporter {

    public String cardHeader();

    public String cardDescription();
}
