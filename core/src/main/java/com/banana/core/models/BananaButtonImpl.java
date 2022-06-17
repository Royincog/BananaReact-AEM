package com.banana.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.banana.core.models.adapters.BananaButton;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = SlingHttpServletRequest.class,adapters = {BananaButton.class, ComponentExporter.class},resourceType = "bananaReact/components/bananaButton",defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BananaButtonImpl implements BananaButton {

    @ValueMapValue
    private String text;

    @ValueMapValue
    private String colortype;

    @ValueMapValue
    private String buttontype;

    @Override
    public String getBananaName() {
        return text;
    }

    @Override
    public String getColorType() {
        return colortype;
    }

    @Override
    public String getButtonType() {
        return buttontype;
    }

    @Override
    public String getExportedType() {
        return "bananaReact/components/bananaButton";
    }
}
