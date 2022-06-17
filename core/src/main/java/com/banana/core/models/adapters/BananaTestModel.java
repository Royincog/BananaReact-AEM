package com.banana.core.models.adapters;

import com.adobe.cq.export.json.ComponentExporter;

import java.util.List;

public interface BananaTestModel extends ComponentExporter {



    public List<String> getTextList();
}
